<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use Carbon\Carbon;
use Cmgmyr\Messenger\Models\Message;
use Cmgmyr\Messenger\Models\Participant;
use App\Models\Thread;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;

class MessagesController extends Controller
{
    /**
     * Show all of the message threads to the user.
     *
     * @return mixed
     */
    public function index()
    {
        // All threads, ignore deleted/archived participants
        $threads = Thread::with('messages','messages.user','post')->orderBy("created_at", 'DESC')->get(); ;

        // // All threads that user is participating in
        // $threads = Thread::forUser(Auth::id())->latest('updated_at')->get();

        // All threads that user is participating in, with new messages
        // $threads = Thread::forUserWithNewMessages(Auth::id())->latest('updated_at')->get();

        // $threads = Thread::get();
        return $threads;
    }

    /**
     * Shows a message thread.
     *
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        // try {
        //     $thread = Thread::findOrFail($id);
        // } catch (ModelNotFoundException $e) {
        //     Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');

        //     return redirect()->route('messages');
        // }

        // // show current user in list if not a current participant
        // // $users = User::whereNotIn('id', $thread->participantsUserIds())->get();

        // // don't show the current user in list
        // $userId = Auth::id();
        // $users = User::whereNotIn('id', $thread->participantsUserIds($userId))->get();

        // $thread->markAsRead($userId);

        // return compact('thread', 'users');

        $thread = Thread::findOrFail($id);


        $messages = $thread->messages;
        $post = $thread->post;



        // return [
        //     'movie' => $movie,
        //     'genres' => $genres,
        //     'people' => $people
        // ];

        // same as above:
        return compact('thread');

    
        return $thread;

    }

    /**
     * Creates a new message thread.
     *
     * @return mixed
     */
    public function create($id)
    // public function create()
    {
        // $users = User::where('id', '!=', Auth::id())->get();
        $users = User::where('id', '!=', Auth::id())->where("id", "=", $id)->get();

        return compact('users');

       /*  return view('messenger.create', compact('users')); */
    }

    /**
     * Stores a new message thread.
     *
     * @return mixed
     */
    public function store()
    {
        $input = Request::all();

        $thread = Thread::create([
            // 'post_id' => $['post_id'],
             'subject' => $input['subject'],
        ]);

        // Message
        Message::create([
            'thread_id' => $thread->id,
            'user_id' => Auth::id(),
            'body' => "Hi there!",
        ]);

        // Sender
        Participant::create([
            'thread_id' => $thread->id,
            'user_id' => Auth::id(),
            'last_read' => new Carbon,
        ]);

        // Recipients
        if (Request::has('recipients')) {
            $thread->addParticipant($input['recipients']);
        }

        return redirect()->route('messages');
    }

    /**
     * Adds a new message to a current thread.
     *
     * @param $id
     * @return mixed
     */
    public function update($id)
    {
        try {
            $thread = Thread::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            Session::flash('error_message', 'The thread with ID: ' . $id . ' was not found.');

            return redirect()->route('messages');
        }

        $thread->activateAllParticipants();

        // Message
        Message::create([
            'thread_id' => $thread->id,
            'user_id' => Auth::id(),
            'body' => Request::input('message'),
        ]);

        // Add replier as a participant
        $participant = Participant::firstOrCreate([
            'thread_id' => $thread->id,
            'user_id' => Auth::id(),
        ]);
        $participant->last_read = new Carbon;
        $participant->save();

        // Recipients
        if (Request::has('recipients')) {
            $thread->addParticipant(Request::input('recipients'));
        }

        return redirect()->route('messages.show', $id);
    }
}

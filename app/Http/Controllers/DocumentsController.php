<?php

namespace App\Http\Controllers;

use Auth;
use App\Document;
use Illuminate\Http\Request;

class DocumentsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    /**
     * Show list of documents.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::user()->id;

        $documents = Document::where('user_id', $user_id)->get();

        return view('documents.index', compact('documents'));
    }
    
    
}

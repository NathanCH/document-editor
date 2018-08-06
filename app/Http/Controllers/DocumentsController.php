<?php

namespace App\Http\Controllers;

use App\Document;
use App\Http\Requests\StoreDocument;
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
        
        parent::__construct();
    }
    
    /**
     * Show list of documents.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $documents = Document::where('user_id', $this->userId)->get();

        return view('documents.index', compact('documents'));
    }
    
    /**
     * Display request form to create document.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('documents.create');
    }
    
    /**
     * Store document.
     *
     * @param StoreDocument $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDocument $request)
    {
        if (!$request->validated()) {
            return redirect('/');
        }
        
        $document = new Document;
        
        $document->user_id = $this->userId;
        $document->title = $request->title;
        
        $document->save();
    }
    
    
}

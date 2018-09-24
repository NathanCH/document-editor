<?php

namespace App\Http\Controllers;

use App\Document;
use App\Http\Requests\StoreDocument;
use App\Http\Requests\UpdateDocument;
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
        
        return redirect('documents');
    }
    
    /**
     * Display the document.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $document = Document::find($id);

        return view('documents.show', compact('document'));
    }
    
    /**
     * Handle update document request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDocument $request, $id)
    {
        if (!$request->validated()) {
            return redirect('/');
        }
        
        $document = Document::whereId($id)->first();
        
        $document->update([
          'title' => $request->title,
        ]);
        
        $document->save();
        
        return redirect('documents');
    }

}

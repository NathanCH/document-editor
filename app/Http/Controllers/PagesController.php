<?php

namespace App\Http\Controllers;

use App\Page;
use App\Document;
use App\Http\Requests\StorePage;
use Illuminate\Http\Request;

class PagesController extends Controller
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
     * Show list of pages.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Page::where('user_id', $this->userId)->get();

        return view('pages.index', compact('pages'));
    }
    
    /**
     * Display request form to create page.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $documents = Document::where('user_id', $this->userId)->get();
        
        return view('pages.create', compact('documents'));
    }
    
    /**
     * Store page.
     *
     * @param StoreDocument $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePage $request)
    {
        if (!$request->validated()) {
            return redirect('/');
        }

        $page = new Page;
        
        $page->user_id = $this->userId;

        $page->order = $request->order;
        
        $document = Document::find($request->document_id);
        
        $document->pages()->save($page);

        return redirect('pages');
    }
    
    
}

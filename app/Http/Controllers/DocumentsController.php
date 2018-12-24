<?php
namespace App\Http\Controllers;

use App\Document;
use App\Http\Resources\DocumentResource;
use App\Http\Resources\DocumentCollection;
use Illuminate\Http\Request;

class DocumentsController extends Controller
{    
    public function index()
    {
        return new DocumentCollection(Document::all());
    }

    public function show($id)
    {
        return new DocumentResource(Document::find($id));
    }

}

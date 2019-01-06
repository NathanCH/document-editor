<?php
namespace App\Http\Controllers;

use App\Document;
use App\Http\Resources\DocumentResource;
use App\Http\Resources\DocumentCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class DocumentsController extends Controller
{    
    public function index()
    {
        $sort = Input::get('sort');

        switch ($sort) {
          default:
          case 'date_desc':
              $documents = Document::orderBy('created_at', 'desc')->get();
              break;

          case 'date_asc':
              $documents = Document::orderBy('created_at', 'asc')->get();
              break;

          case 'date_update':
              $documents = Document::orderBy('updated_at', 'desc')->get();
              break;

          case 'alpha_asc':
              $documents = Document::orderBy('title', 'asc')->get();
              break;

          case 'alpha_desc':
              $documents = Document::orderBy('title', 'desc')->get();
              break;
        }
   
        return new DocumentCollection($documents);
    }

    public function show($id)
    {
        return new DocumentResource(Document::find($id));
    }

}

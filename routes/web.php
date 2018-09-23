<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

// Documents
Route::get('/documents', 'DocumentsController@index')->name('documents');
Route::get('/documents/create', 'DocumentsController@create')->name('documents/create');

Route::post('/documents', 'DocumentsController@store')->name('documents');

// Pages
Route::get('/pages', 'PagesController@index')->name('pages');
Route::get('/pages/create', 'PagesController@create')->name('pages/create');

Route::post('/pages', 'PagesController@store')->name('pages');




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

// Profile
Route::get('/profile', 'ProfileController@index')->name('profile');
Route::post('/profile', 'ProfileController@update')->name('profile');

Route::get('/profile/password', 'ProfileController@showProfilePassword')->name('profile/password');
Route::post('/profile/password', 'ProfileController@updateProfilePassword')->name('profile/password');

// Documents
Route::get('/documents', 'DocumentsController@index')->name('documents');
Route::get('/documents/create', 'DocumentsController@create')->name('documents/create');
Route::get('/documents/{id}/', 'DocumentsController@show')->name('documents/{id}');

Route::post('/documents', 'DocumentsController@store')->name('documents');
Route::post('/documents/{id}', 'DocumentsController@update')->name('documents/{id}');

// Pages
Route::get('/pages', 'PagesController@index')->name('pages');
Route::get('/pages/create', 'PagesController@create')->name('pages/create');
Route::get('/pages/{id}/', 'PagesController@show')->name('pages/{id}');

Route::post('/pages', 'PagesController@store')->name('pages');




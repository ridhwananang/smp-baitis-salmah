<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/kurikulum', 'kurikulum')->name('kurikulum');
Route::inertia('/ekstrakurikuler', 'ekstrakurikuler')->name('ekstrakurikuler');
Route::inertia('/profile', 'profile')->name('profile');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

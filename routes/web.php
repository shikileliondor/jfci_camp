<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'intro')->name('intro');
Route::inertia('/accueil', 'Accueil')->name('home');
Route::inertia('/about', 'UnderConstruction', ['title' => 'À propos'])->name('about');
Route::inertia('/programme', 'UnderConstruction', ['title' => 'Programme'])->name('programme');
Route::inertia('/infos-pratiques', 'UnderConstruction', ['title' => 'Infos pratiques'])->name('infos-pratiques');
Route::inertia('/contact', 'UnderConstruction', ['title' => 'Contact'])->name('contact');
Route::inertia('/inscription', 'Inscription')->name('inscription');

Route::get('/media/jfci-logo', function () {
    return response()->file(storage_path('image_videos/jfci_logo.jpg'));
})->name('media.jfci-logo');

Route::get('/media/convention', function () {
    return response()->file(storage_path('image_videos/IMAGE CONVENTION.jpg'));
})->name('media.convention');

Route::get('/media/banniere', function () {
    return response()->file(storage_path('image_videos/banniere.png'));
})->name('media.banniere');

Route::get('/media/gallery/card-1', function () {
    return response()->file(storage_path('image_videos/image 9.jpg'));
});

Route::get('/media/gallery/card-2', function () {
    return response()->file(storage_path('image_videos/image 7.jpg'));
});

Route::get('/media/gallery/card-3', function () {
    return response()->file(storage_path('image_videos/image 2 .jpg'));
});

Route::get('/media/gallery/card-4', function () {
    return response()->file(storage_path('image_videos/image .jpg'));
});

Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::get('invitations/{invitation}/accept', [TeamInvitationController::class, 'accept'])->name('invitations.accept');
    Route::delete('invitations/{invitation}', [TeamInvitationController::class, 'decline'])->name('invitations.decline');
});

require __DIR__.'/settings.php';

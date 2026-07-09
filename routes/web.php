<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'intro')->name('intro');
Route::inertia('/accueil', 'Accueil')->name('home');
Route::inertia('/about', 'Accueil')->name('about');
Route::inertia('/programme', 'Accueil')->name('programme');
Route::inertia('/infos-pratiques', 'Accueil')->name('infos-pratiques');
Route::inertia('/contact', 'Accueil')->name('contact');
Route::inertia('/inscription', 'Accueil')->name('inscription');

Route::get('/media/jfci-logo', function () {
    return response()->file(storage_path('image_videos/jfci_logo.jpg'));
})->name('media.jfci-logo');

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

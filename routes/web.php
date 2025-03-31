<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Deficiency\DeficiencyController;
use App\Http\Controllers\Inspection\InspectionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');


Route::middleware(['auth'])->group( function () {

    // Users
    Route::get('users', [RegisteredUserController::class,'listUsersForDropdown'])->name('users.list');
    
    // Inspections
    Route::get('inspections', [InspectionController::class, 'index'])->name('inspections.index');
    Route::get('inspections/create', [InspectionController::class, 'create'])->name('inspections.create');
    Route::post('inspections', [InspectionController::class, 'save'])->name('inspections.save');
    Route::get('inspections/{id}', [InspectionController::class, 'view'])->name('inspections.view');
    
    // Deficiencies
    Route::post('deficiencies/{id}/remind', [DeficiencyController::class, 'remind'])->name('deficiencies.remind');
    Route::get('deficiencies', [DeficiencyController::class, 'index'])->name('deficiencies.index');
    Route::get('deficiencies/{id}', [DeficiencyController::class, 'view'])->name('deficiencies.view');
    Route::post('deficiencies/{id}/attend', [DeficiencyController::class, 'attend'])->name('deficiencies.attend');
    
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

<?php

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

    Route::get('inspections/create', [InspectionController::class, 'create'])->name('inspections.create');
    Route::get('inspections', [InspectionController::class, 'index'])->name('inspections.index');
    Route::get('inspections/view', [InspectionController::class, 'view'])->name('inspections.view');
    Route::get('deficiencies', [DeficiencyController::class, 'index'])->name('deficiencies.index');
    Route::get('deficiencies/view', [DeficiencyController::class, 'view'])->name('deficiencies.view');
    
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

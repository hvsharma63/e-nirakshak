<?php

namespace App\Queries;

use App\Models\Inspection;
use App\Models\User;
use Illuminate\Support\Collection;

class InspectionQueries {

    public function __construct() {
    }

    public function create(array $inspectionData): Inspection {  
        return Inspection::query()
            ->create($inspectionData);
    }

    public function list(int $userId): Collection {
        return Inspection::query()
            ->select(['id', 'location', 'datetime', 'day_period', 'status'])
            ->withCount(['deficiencies'])
            ->where('attended_by', $userId)
            ->orderByDesc('created_at')
            ->get();
    }

    public function get(int $inspectionId, int $userId): ?Inspection {
        return Inspection::query()
            ->select(['id','location', 'address', 'datetime', 'attended_by', 'day_period', 'no_deficiencies_found', 'status', 'note'])
            ->withOnly([
                'attendedBy:id,name',
                'deficiencies.pertainsTo' => function($query) {
                    $query->select(['id', 'name', 'designation']);
                },
                'deficiencies.comment'
            ])
            ->where('attended_by', $userId)
            ->findOrFail($inspectionId);
    }

    public function update(int $inspectionId, array $inspectionData): void {
        Inspection::query()
            ->where('id', $inspectionId)
            ->update($inspectionData);
    }
}
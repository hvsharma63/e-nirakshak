<script setup lang="ts">
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import Table from '@/components/ui/table/Table.vue';
import TableBody from '@/components/ui/table/TableBody.vue';
import TableCaption from '@/components/ui/table/TableCaption.vue';
import TableCell from '@/components/ui/table/TableCell.vue';
import TableHead from '@/components/ui/table/TableHead.vue';
import TableHeader from '@/components/ui/table/TableHeader.vue';
import TableRow from '@/components/ui/table/TableRow.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { Inspection, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Calendar, Eye, LocateFixed, UserRound, CheckCircle2, Clock, AlertCircle } from 'lucide-vue-next';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Inspections',
        href: '/inspections/create',
    },
];

const inspections: Inspection[] = [
    {
        id: 1,
        location: 'LC-250',
        date: '2023-11-15',
        inspection_type: 'Ambush Check',
        address: '10 KM from ADI Stn and 5 KM from MAN Stn',
        attended_by: 'Arya Kirnendu',
        deficiencies: [],
        status: 'In Progress',
    },
    {
        id: 2,
        location: 'LC-342',
        date: '2023-11-14',
        inspection_type: 'Regular Inspection',
        address: '15 KM from BRC Station',
        attended_by: 'Raj Mehta',
        deficiencies: [],
        status: 'Pending',
    },
    {
        id: 3,
        location: 'LC-127',
        date: '2023-11-13',
        inspection_type: 'Safety Audit',
        address: '8 KM from SRT Junction',
        attended_by: 'Priya Patel',
        deficiencies: [],
        status: 'Completed',
    },
    {
        id: 4,
        location: 'LC-890',
        date: '2023-11-12',
        inspection_type: 'Night Inspection',
        address: '20 KM from VDA Station',
        attended_by: 'Amit Shah',
        deficiencies: [],
        status: 'Completed',
    },
];

// Add status badge styling utility
const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case 'completed':
            return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
        case 'pending':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
        case 'in-progress':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
};

// Add icon utility for status
const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
        case 'completed':
            return CheckCircle2;
        case 'pending':
            return AlertCircle;
        case 'in-progress':
            return Clock;
        default:
            return AlertCircle;
    }
};

// Add a utility function for responsive layout
const isMobile = ref(window.innerWidth < 768);
window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
});

// Add view handler method
const viewInspection = (id: number) => {
    // You can use Inertia Link or router to navigate
    window.location.href = `/inspections/${id}`;
};
</script>

<template>

    <Head title="My Inspections" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col space-y-6 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-8">
            <h2 class="text-xl font-semibold tracking-tight sm:text-2xl">My Inspections</h2>

            <div class="overflow-x-auto">
                <Table class="min-w-full">
                    <TableHeader class="hidden md:table-header-group">
                        <TableRow>
                            <TableHead class="w-[100px] py-4">
                                Sr. No.
                            </TableHead>
                            <TableHead class="w-[100px] py-4">
                                <div class="flex items-center gap-2">
                                    <LocateFixed class="h-4 w-4" /> Location
                                </div>
                            </TableHead>
                            <TableHead class="py-4">Type</TableHead>
                            <TableHead class="py-4">
                                <div class="flex items-center gap-2">
                                    <Calendar class="h-4 w-4" /> Date
                                </div>
                            </TableHead>
                            <TableHead class="py-4">
                                <div class="flex items-center gap-2">
                                    <UserRound class="h-4 w-4" /> Inspector
                                </div>
                            </TableHead>
                            <TableHead class="py-4">Status</TableHead>
                            <TableHead class="w-[100px] py-4 text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="inspection in inspections" :key="inspection.id" class="block border-b border-gray-200 md:table-row md:border-0
                                  even:bg-gray-50/50 dark:even:bg-gray-800/50 
                                  md:even:bg-transparent
                                  hover:bg-gray-100 dark:hover:bg-gray-700/50 
                                  transition-colors
                                  mb-3 md:mb-0
                                  rounded-lg md:rounded-none
                                  shadow-sm md:shadow-none
                                  p-4 md:p-0">
                            <TableCell class="flex items-center justify-between py-2 md:table-cell md:py-3">
                                {{ inspection.id }}
                            </TableCell>
                            <TableCell class="flex items-center justify-between py-2 md:table-cell md:py-3">
                                <span class="font-medium text-gray-500 md:hidden">Location</span>
                                <span class="font-semibold">{{ inspection.location }}</span>
                            </TableCell>
                            <TableCell class="flex items-center justify-between py-2 md:table-cell md:py-3">
                                <span class="font-medium text-gray-500 md:hidden">Type</span>
                                <span>{{ inspection.inspection_type }}</span>
                            </TableCell>
                            <TableCell class="flex items-center justify-between py-2 md:table-cell md:py-3">
                                <span class="font-medium text-gray-500 md:hidden">Date</span>
                                <span>{{ inspection.date }}</span>
                            </TableCell>

                            <TableCell class="flex items-center justify-between py-2 md:table-cell md:py-3">
                                <span class="font-medium text-gray-500 md:hidden">Inspector</span>
                                <span>{{ inspection.attended_by }}</span>
                            </TableCell>
                            <TableCell class="flex items-center justify-between py-2 md:table-cell md:py-3">
                                <span class="font-medium text-gray-500 md:hidden">Status</span>
                                <span
                                    class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                                    :class="getStatusColor(inspection.status)">
                                    <component :is="getStatusIcon(inspection.status)" class="h-3.5 w-3.5" />
                                    {{ inspection.status }}
                                </span>
                            </TableCell>
                            <TableCell
                                class="flex items-center justify-between py-2 md:table-cell md:py-3 md:text-right">
                                <span class="font-medium text-gray-500 md:hidden">Actions</span>
                                <Link :href="`/inspections/view`"
                                    class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 h-9 px-4 py-2">
                                <Eye class="h-4 w-4" />
                                </Link>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
@media (max-width: 768px) {
    :deep(td::before) {
        content: attr(data-label);
        font-weight: 500;
    }
}
</style>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';
import PlaceholderPattern from '../components/PlaceholderPattern.vue';
import Card from '@/components/ui/card/Card.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import TextLink from '@/components/TextLink.vue';
import { NotebookTextIcon } from 'lucide-vue-next';
import CardHeader from '@/components/ui/card/CardHeader.vue';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
</script>

<template>

    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <div class="grid auto-rows-min gap-4 md:grid-cols-3">
                <Card class="rounded-xl">
                    <CardHeader class="px-10 pb-0 pt-8 text-center">
                        <CardTitle class="text-xl">Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent class="px-10 mt-5">
                        <TextLink href="/inspections/create" class="block mb-4">
                            <NotebookTextIcon class="inline-block mr-2 size-5" /> <!-- Add the icon -->
                            Diarise Inspection
                        </TextLink>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>

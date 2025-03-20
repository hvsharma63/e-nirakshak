import type { PageProps } from '@inertiajs/core';
import type { LucideIcon } from 'lucide-vue-next';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon;
    isActive?: boolean;
}

export interface SharedData extends PageProps {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
}

export interface User {
    id: number;
    name: string;
    email: string;
    designation: string;
    pf_no: string;
    dob: string;
    mobile_no: string;
    avatar?: string;
    created_at: string;
    updated_at: string;
}


export interface Inspection {
    id: number;
    location: string;
    date: string;
    inspection_type: string;
    address: string;
    attended_by: string;
    deficiencies: Deficiencies[]; // Added property
}

export interface Deficiencies {
    id: number;
    inspection_id: number;
    pertains_to: string;
    is_viewed: boolean;
    is_attended: boolean;
    action_date: string;
}
export type BreadcrumbItemType = BreadcrumbItem;

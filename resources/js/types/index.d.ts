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

export interface ListInspections {
    id: number;
    location: string;
    date: string;
    time: string;
    day_period: string;
    deficiencies_count: number;
    status: string;
}

export interface ListDeficiencies {
    id: number;
    location: string;
    note: string;
    action_date: string;
    attended_by: string;
    date: string;
    time: string;
    status: string;
}

export interface Deficiencies {
    id: number;
    inspection_id: number;
    pertains_to: string;
    is_viewed: boolean;
    is_attended: boolean;
    comment_by_inspector: string;
    comment_by_pertaining_officer: string;
    action_date: string;
}

export interface Deficiency {
    id: number;
    inspection_id: number;
    pertains_to: string;
    is_viewed: boolean;
    is_attended: boolean;
    comment_by_inspector: string;
    comment_by_pertaining_officer: string;
    action_date: string;
}

export interface ItemDeficiency {
    id: number;
    pertains_to: ItemDeficiencyPertainsTo;
    note: string;
    action_date: string;
    status: string;
    reported_on: string;
    is_pending: boolean;
    is_seen: boolean;
    is_attended: boolean;
    comment_by_pertaining_officer: string;
}

export interface ItemDeficiencyPertainsTo {
    id: number;
    name: string;
    designation: string;
}

export interface ViewInspection {
    id: number;
    location: string;
    address: string;
    attended_by: ItemDeficiencyPertainsTo;
    datetime: string;
    note: string;
    day_period: string;
    no_deficiencies_found: boolean;
    status: string;
    deficiencies: ItemDeficiency[];
}


export interface ViewDeficiency {
    id: number;
    inspection_id: number;
    location: string;
    address: string;
    attended_by: string;
    datetime: string;
    inspection_note: string;
    deficiency_note: string;
    day_period: string;
    inspection_status: string;
    deficiency_status: string;
    action_date: string;
    comment: string;
    deficiency_created_at: string;
}


export type BreadcrumbItemType = BreadcrumbItem;

import {
    mdiAccountCircle,
    mdiMonitor,
    mdiCogOutline, 
    mdiListBox,
    mdiPlaylistEdit ,
    mdiCalendarAccount ,
    mdiCalendarCheckOutline ,
    mdiCalendarEdit,
    mdiDomain,
    mdiShieldCrown,
    mdiViewList,
    mdiViewModule,
    mdiLockCheckOutline,
    mdiAccountSupervisor,
    mdiAccount,
    mdiClipboardList,
    mdiLightbulbOutline,
    mdiBook,
    mdiMap,
    mdiShieldCar,
    mdiPackageVariantClosed,
    mdiCardAccountDetailsStarOutline,
    mdiShieldLock,
    mdiAccountMultipleCheck,
    mdiTicket,
    mdiTicketOutline,
    mdiAccountCreditCard,
    mdiSourceBranch,
    mdiCalendarMonth,
} from "@mdi/js";
// import Icon from '@mdi/react';

export default [
    {
        route: "dashboard",
        icon: mdiMonitor,
        label: "Inicio",
        to: "/dashboard",
    },
    {
        route: "profile.edit",
        label: "Perfil",
        icon: mdiAccountCircle,
    },
    {
        label: "Seguridad",
        icon: mdiShieldLock,
        role: "Admin",
        permission: "modulo.seguridad",
        menu: [
            {
                label: "Modulos",
                route: "module.index",
                icon: mdiViewModule,
                permission: "module.index",
            },
            {
                label: "Permisos",
                route: "permissions.index",
                icon: mdiLockCheckOutline,
                permission: "permissions.index",
            },
            {
                label: "Roles",
                route: "perfiles.index",
                icon: mdiAccountSupervisor,
                permission: "perfiles.index",
            },
            {
                label: "Usuarios",
                route: "user.index",
                icon: mdiAccount,
                permission: "user.index",
            },
        ],
    },
    {
        label: "Catalogos",
        icon: mdiPlaylistEdit ,
        role: "Admin",
        menu: [
            {
                label: "Especialidades",
                route: "especialidades.index",
                icon: mdiListBox ,
            },
            {
                label: "Tratamientos",
                route: "tratamientos.index",
                icon: mdiClipboardList ,
               
            },
           
        ],
    },
    {
        route: "doctores.index",
        label: "Doctores",
        icon: mdiCogOutline ,
    },
    {
        route: "profile.edit",
        label: "Mantenimiento",
        icon: mdiCogOutline ,
    },
    {
        route: "profile.edit",
        label: "Citas",
        icon: mdiCalendarEdit,
    },
    {
        route: "profile.edit",
        label: "Historial citas",
        icon: mdiCalendarCheckOutline  ,
    },
    {
        route: "profile.edit",
        label: "Calendario",
        icon: mdiCalendarMonth ,
    },
    {
        isDivider: true,
    },
];

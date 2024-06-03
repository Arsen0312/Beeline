import React from "react";
import {RouteProps} from "react-router-dom"
import {Main} from "../../../../2Pages/Main";
import {DescriptionVacancy} from "../../../../2Pages/DescriptionVacancy";
import {AllVacancy} from "../../../../2Pages/AllVacancy";

enum AppRoutes {
    MAIN = "main",
    ALLVACANCY = "AllVacancy",
    DESCRIPTIONSVACANCY = "DescriptionsVacancy",

    NOT_FOUND = "not_found",
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ALLVACANCY]: "/AllVacancy",
    [AppRoutes.DESCRIPTIONSVACANCY]: "/DescriptionsVacancy/:id",

    //last
    [AppRoutes.NOT_FOUND]: "*"
};


export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <Main/>
    },
    [AppRoutes.ALLVACANCY]: {
        path: RoutePaths.AllVacancy,
        element: <AllVacancy/>
    },
    [AppRoutes.DESCRIPTIONSVACANCY]: {
        path: RoutePaths.DescriptionsVacancy,
        element: <DescriptionVacancy/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <div>Not Found</div>
    }
};
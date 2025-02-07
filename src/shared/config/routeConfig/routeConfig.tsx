import { ChatPage } from 'pages/ChatPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    CHAT = 'chat'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CHAT]: '/chat/', // + :chatId
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <HomePage />,
    },
    [AppRoutes.CHAT]: {
        path: `${RoutePath.chat}:id`,
        element: <ChatPage />
    }
};
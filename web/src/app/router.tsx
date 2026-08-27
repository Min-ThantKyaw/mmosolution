import {
  createBrowserRouter,
} from "react-router-dom";

// import HomePage from "../features/posts/pages/HomePage";
import LoginPage from "../features/auth/pages/LoginPage";
// import RegisterPage from "../features/auth/pages/RegisterPage";
// 
// import BookmarksPage from "../features/bookmarks/pages/BookmarksPage";
// 
// import WriterDashboardPage from "../features/writer/pages/DashboardPage";
// import WriterPostsPage from "../features/writer/pages/PostManagementPage";
// import WriterCommentsPage from "../features/writer/pages/CommentManagementPage";
// import WriterStatsPage from "../features/writer/pages/StatsPage";
// 
// import AdminDashboardPage from "../features/admin/pages/DashboardPage";
// import UserManagementPage from "../features/admin/pages/UserManagementPage";
// import AdminPostsPage from "../features/admin/pages/PostManagementPage";
// import SettingsPage from "../features/admin/pages/SettingsPage";


export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },

  {
    path: "/login",
    element: <LoginPage />,
  },

//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },

  // Protected Routes
//   {
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/bookmarks",
//         element: <BookmarksPage />,
//       },
//     ],
//   },
// 
//   // Writer Routes
//   {
//     element: <RoleRoute allowedRoles={["WRITER"]} />,
//     children: [
//       {
//         path: "/writer/dashboard",
//         element: <WriterDashboardPage />,
//       },
//       {
//         path: "/writer/posts",
//         element: <WriterPostsPage />,
//       },
//       {
//         path: "/writer/comments",
//         element: <WriterCommentsPage />,
//       },
//       {
//         path: "/writer/stats",
//         element: <WriterStatsPage />,
//       },
//     ],
//   },
// 
//   // Admin Routes
//   {
//     element: <RoleRoute allowedRoles={["ADMIN"]} />,
//     children: [
//       {
//         path: "/admin/dashboard",
//         element: <AdminDashboardPage />,
//       },
//       {
//         path: "/admin/users",
//         element: <UserManagementPage />,
//       },
//       {
//         path: "/admin/posts",
//         element: <AdminPostsPage />,
//       },
//       {
//         path: "/admin/settings",
//         element: <SettingsPage />,
//       },
//     ],
//   },
]);
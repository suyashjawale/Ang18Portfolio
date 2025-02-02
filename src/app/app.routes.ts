import { Routes } from '@angular/router';

export function getRoutes(): Routes {
    if (window.innerWidth > 768) {
        return [
            {
                path: '',
                loadComponent: () => import('./components/large/large/large.component').then(mod => mod.LargeComponent),
                children:[
                    {
                        path:'',
                        loadComponent: () => import('./components/large/homepage-l/homepage-l.component').then(mod => mod.HomepageLComponent),
                    },
                    {
                        path:'blog',
                        loadComponent: () => import('./components/large/blog-l/blog-l.component').then(mod => mod.BlogLComponent),
                    },
                    {
                        path:'collection',
                        loadComponent: () => import('./components/large/collection-l/collection-l.component').then(mod => mod.CollectionLComponent),
                    },
                    {
                        path:'projects',
                        loadComponent: () => import('./components/large/projects-l/projects-l.component').then(mod => mod.ProjectsLComponent),
                    },
                    {
                        path:'snippets',
                        loadComponent: () => import('./components/large/snippets-l/snippets-l.component').then(mod => mod.SnippetsLComponent),
                    },
                    {
                        path:'posts',
                        loadComponent: () => import('./components/large/posts-l/posts-l.component').then(mod => mod.PostsLComponent),
                    },
                    {
                        path:'playlist',
                        loadComponent: () => import('./components/large/playlist-l/playlist-l.component').then(mod => mod.PlaylistLComponent),
                    },
                ]
            }
        ]
    }

    return [
        {
            path: '',
            loadComponent: () => import('./components/small/small/small.component').then(mod => mod.SmallComponent),
            children:[
                {
                    path:'',
                    loadComponent: () => import('./components/small/homepage-s/homepage-s.component').then(mod => mod.HomepageSComponent),
                },
                {
                    path:'blog',
                    loadComponent: () => import('./components/small/blog-s/blog-s.component').then(mod => mod.BlogSComponent),
                },
                {
                    path:'collection',
                    loadComponent: () => import('./components/small/collection-s/collection-s.component').then(mod => mod.CollectionSComponent),
                },
                {
                    path:'projects',
                    loadComponent: () => import('./components/small/projects-s/projects-s.component').then(mod => mod.ProjectsSComponent),
                },
                {
                    path:'snippets',
                    loadComponent: () => import('./components/small/snippets-s/snippets-s.component').then(mod => mod.SnippetsSComponent),
                },
                {
                    path:'posts',
                    loadComponent: () => import('./components/small/posts-s/posts-s.component').then(mod => mod.PostsSComponent),
                },
                {
                    path:'playlist',
                    loadComponent: () => import('./components/small/playlist-s/playlist-s.component').then(mod => mod.PlaylistSComponent),
                },
                {
                    path:'search',
                    loadComponent: () => import('./components/small/search-s/search-s.component').then(mod => mod.SearchSComponent),
                }
            ]
        }
    ]

}

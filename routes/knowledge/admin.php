<?php

use Illuminate\Support\Facades\Route;

Route::group(
    ['prefix' => 'knowledge', 'as' => 'knowledge.'],
    function () {
        //Route::get('/', 'HomeController@index')->name('home');
        // Permissions
        //Route::delete('permissions/destroy', 'PermissionsController@massDestroy')->name('permissions.massDestroy');
        //Route::resource('permissions', 'PermissionsController');

        // Roles
        //Route::delete('roles/destroy', 'RolesController@massDestroy')->name('roles.massDestroy');
        //Route::resource('roles', 'RolesController');

        // Users
        //Route::delete('users/destroy', 'UsersController@massDestroy')->name('users.massDestroy');
        //Route::resource('users', 'UsersController');

        // Categories
        Route::delete('categories/destroy', 'Extensions\KnowledgeBase\CategoriesController@massDestroy')->name('categories.massDestroy');
        Route::resource('categories', 'Extensions\KnowledgeBase\CategoriesController');

        // Tags
        Route::delete('tags/destroy', 'Extensions\KnowledgeBase\TagsController@massDestroy')->name('tags.massDestroy');
        Route::resource('tags', 'Extensions\KnowledgeBase\TagsController');

        // Articles
        Route::delete('articles/destroy', 'Extensions\KnowledgeBase\ArticlesController@massDestroy')->name('articles.massDestroy');
        Route::resource('articles', 'Extensions\KnowledgeBase\ArticlesController');

        // Faq Categories
        Route::delete('faq-categories/destroy', 'Extensions\KnowledgeBase\FaqCategoryController@massDestroy')->name('faq-categories.massDestroy');
        Route::resource('faq-categories', 'Extensions\KnowledgeBase\FaqCategoryController');

        // Faq Questions
        Route::delete('faq-questions/destroy', 'Extensions\KnowledgeBase\FaqQuestionController@massDestroy')->name('faq-questions.massDestroy');
        Route::resource('faq-questions', 'Extensions\KnowledgeBase\FaqQuestionController');
    }
);

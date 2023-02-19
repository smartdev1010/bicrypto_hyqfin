<?php

use Illuminate\Support\Facades\Route;

Route::group(
    ['prefix' => 'knowledge', 'as' => 'knowledge.'],
    function () {
        Route::get('categories/check_slug', 'Extensions\KnowledgeBase\CategoryController@check_slug')->name('categories.check_slug');
        Route::get('categories/{slug}/{category}', 'Extensions\KnowledgeBase\CategoryController@show')->name('categories.show');
        Route::get('tags/check_slug', 'Extensions\KnowledgeBase\TagController@check_slug')->name('tags.check_slug');
        Route::get('tags/{slug}/{tag}', 'Extensions\KnowledgeBase\TagController@show')->name('tags.show');
        Route::get('articles/check_slug', 'Extensions\KnowledgeBase\ArticleController@check_slug')->name('articles.check_slug');
        Route::get('articles/{slug}/{article}', 'Extensions\KnowledgeBase\ArticleController@show')->name('articles.show');
        Route::get('articles', 'Extensions\KnowledgeBase\ArticleController@index')->name('articles.index');
        Route::get('faq', 'Extensions\KnowledgeBase\FaqController@index')->name('faq.index');
        Route::get('faq/{search}', 'Extensions\KnowledgeBase\FaqController@search')->name('faq.search');
        Route::get('/', 'Extensions\KnowledgeBase\HomeController@index')->name('index');
    }
);

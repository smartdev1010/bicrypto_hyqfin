<?php

namespace App\Traits;  // or App\Traits, whichever you prefer

use App\Query\CachingBuilder;

trait CacheQueries
{
    /**
     * Get a new query builder instance for the connection.
     *
     * @return \App\Query\CachingBuilder
     */
    protected function newBaseQueryBuilder()
    {
        $conn = $this->getConnection();

        $grammar = $conn->getQueryGrammar();

        return new CachingBuilder($conn, $grammar, $conn->getPostProcessor());
    }
}

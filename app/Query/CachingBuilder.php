<?php

namespace App\Query;

use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Support\Facades\Cache;

class CachingBuilder extends QueryBuilder
{
    /**
     * Run the query as a "select" statement against the connection.
     *
     * @return array
     */
    protected function runSelect()
    {

        // config option here is just for example
        // in case you ever might want to turn it off.
        // By default database config file contains no such key --
        // you would have to add it.
        if (config('database.cache_queries')) {
            return Cache::store('request')->remember($this->getCacheKey(), now()->addHours(4), function () {
                return parent::runSelect();
            });
        }

        return parent::runSelect();
    }

    /**
     * Returns a Unique String that can identify this Query.
     *
     * @return string
     */
    protected function getCacheKey()
    {
        return json_encode([
            $this->toSql() => $this->getBindings(),
        ]);
    }
}

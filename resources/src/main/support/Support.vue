<template>
    <div>
        <div class="my-2 text-end">
            <a
                href="/user/support/ticket/new"
                class="btn btn-outline-primary"
                >{{ $t("New Ticket") }}</a
            >
        </div>

        <div
            class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
        >
            <div class="font-medium">{{ $t("Support Tickets") }}</div>
            <Filter>
                <input
                    v-model="filters.ticket.value"
                    type="text"
                    class="filter-input"
                    placeholder="Ticket ID"
            /></Filter>
        </div>
        <div class="card relative overflow-x-auto">
            <VTable
                :key="tickets.length"
                v-model:current-page="currentPage"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="tickets"
                :filters="filters"
                :page-size="10"
                :hide-sort-icons="true"
                @totalPagesChanged="totalPages = $event"
            >
                <template #head>
                    <tr
                        class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <VTh sort-key="subject" scope="col" class="py-3 px-6">
                            <Col text="Subject" />
                        </VTh>
                        <VTh sort-key="status" scope="col" class="py-3 px-6">
                            <Col text="Status" />
                        </VTh>
                        <VTh
                            sort-key="last_reply"
                            scope="col"
                            class="py-3 px-6"
                        >
                            <Col text="Last Reply" />
                        </VTh>
                        <th scope="col">Action</th>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="tickets.length > 0">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td data-label="Subject" class="py-4 px-6">
                                <router-link
                                    :to="'/support/ticket/' + row.ticket"
                                    class="fw-bold"
                                    >[Ticket#{{ row.ticket }}]
                                    {{ row.subject }}
                                </router-link>
                            </td>
                            <td data-label="Status" class="py-4 px-6">
                                <span
                                    v-if="row.status == 0"
                                    class="badge bg-success"
                                    >Open</span
                                >
                                <span
                                    v-else-if="row.status == 1"
                                    class="badge bg-primary"
                                    >Answered</span
                                >
                                <span
                                    v-else-if="row.status == 2"
                                    class="badge bg-warning"
                                    >Customer Reply</span
                                >
                                <span
                                    v-else-if="row.status == 3"
                                    class="badge bg-danger"
                                    >Closed</span
                                >
                            </td>
                            <td data-label="Last Reply" class="py-4 px-6">
                                <toDate :time="row.last_reply" />
                            </td>

                            <td data-label="Action" class="py-4 px-6">
                                <!-- <router-link
                                    :to="'/support/ticket/' + row.ticket"
                                    class="btn btn-primary btn-sm"
                                >
                                    <i
                                        class="bi bi-display"
                                        style="margin-right: 0 !important"
                                    ></i>
                                </router-link> -->
                                <a
                                    class="btn btn-primary btn-sm"
                                    :href="
                                        '/user/support/ticket/view/' +
                                        row.ticket
                                    "
                                >
                                    <i
                                        class="bi bi-display"
                                        style="margin-right: 0 !important"
                                    ></i
                                ></a>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr
                            scope="row"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td colspan="100%" class="py-4 px-6">
                                {{ $t("No results found!") }}
                            </td>
                        </tr>
                    </template>
                </template>
            </VTable>
        </div>

        <VTPagination
            v-model:currentPage="currentPage"
            class="float-right flex items-center justify-between pt-4"
            aria-label="Table navigation"
            :total-pages="totalPages"
            :boundary-links="true"
        >
            <template #firstPage> {{ $t("First") }} </template>

            <template #lastPage> {{ $t("Last") }} </template>

            <template #next
                ><span class="sr-only">{{ $t("Next") }}</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>

            <template #previous>
                <span class="sr-only">{{ $t("Previous") }}</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>
        </VTPagination>
    </div>
</template>

<script>
import toDate from "../../partials/toDate.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
export default {
    components: { toDate, Filter, Col },
    props: [],

    // component data
    data() {
        return {
            tickets: [],
            filters: {
                ticket: { value: "", keys: ["ticket"] },
            },
            currentPage: 1,
            totalPages: 0,
        };
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        fetchData() {
            axios.post("/user/fetch/support").then((response) => {
                this.tickets = response.tickets;
            });
        },
    },
};
</script>

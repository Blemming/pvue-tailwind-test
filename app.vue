<script setup lang="ts">
const selectedCountry = ref(null);
const countries = ref([
    { label: 'Australia',name:'Australia', code: 'AU' },
    { label: 'Brazil',name:'Brazil', code: 'BR' },
    { label: 'China',name:'China', code: 'CN' },
    { label: 'Egypt',name:'Egypt', code: 'EG' },
    { label: 'France',name:'France', code: 'FR' },
    { label: 'Germany',name:'Germany', code: 'DE' },
    { label: 'India',name:'India', code: 'IN' },
    { label: 'Japan',name:'Japan', code: 'JP' },
    { label: 'Spain',name:'Spain', code: 'ES' },
    { label: 'United States',name:'United States', code: 'US' }
]);
</script>
<template>
    <div class="m-auto" style="max-width: 600px;">

        <div class="flex flex-col gap-12">
            <div class="flex gap-6 flex-wrap">
                <div
                    class="rounded-border p-4 border border-transparent flex items-center justify-center bg-primary hover:bg-primary-emphasis text-primary-contrast font-medium flex-auto transition-colors">
                    primary</div>
                <div
                    class="rounded-border p-4 border border-transparent flex items-center justify-center bg-highlight hover:bg-highlight-emphasis font-medium flex-auto transition-colors">
                    highlight</div>
                <div
                    class="rounded-border p-4 border border-surface flex items-center justify-center text-muted-color hover:text-color hover:bg-emphasis font-medium flex-auto transition-colors">
                    box</div>
            </div>
        </div>
        <div class="mt-10 flex flex-col gap-6 w-full sm:w-auto">
            <div class="flex flex-col sm:flex-row sm:items-center gap-6">
                <div class="flex-auto">
                    <label for="firstname" class="block font-semibold mb-2">Firstname</label>
                    <InputText id="firstname" class="w-full" />
                </div>
                <div class="flex-auto">
                    <label for="lastname" class="block font-semibold mb-2">Lastname</label>
                    <InputText id="lastname" class="w-full" />
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-6">
                <div class="flex-1">
                    <label for="date" class="block font-semibold mb-2">Date</label>
                    <DatePicker inputId="date" class="w-full" />
                </div>
                <div class="flex-1">
                    <label for="country" class="block font-semibold mb-2">Country</label>
                    <Select v-model="selectedCountry" inputId="country" :options="countries" optionLabel="name"
                        placeholder="Select a Country" class="w-full">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center">
                                <img :alt="slotProps.value.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
                                    style="width: 18px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <img :alt="slotProps.option.label"
                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                    :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
                                    style="width: 18px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Select>
                </div>
            </div>
            <div class="flex-auto">
                <label for="message" class="block font-semibold mb-2">Message</label>
                <Textarea id="message" class="w-full" rows="4" />
            </div>
        </div>
    </div>
</template>

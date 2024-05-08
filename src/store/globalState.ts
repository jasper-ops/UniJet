import { computed, reactive } from 'vue';

const state = reactive({
    requestCounter: 0,
});

export const requesting = computed(() => state.requestCounter > 0);

export function incrementRequest() {
    state.requestCounter++;
}

export function decrementRequest() {
    state.requestCounter--;
}

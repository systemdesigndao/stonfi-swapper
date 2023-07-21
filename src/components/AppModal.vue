<script lang="ts" setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'

defineProps<{show?: boolean, close?: () => void;}>();
</script>

<template>
    <TransitionRoot appear :show="show" as="template">
      <Dialog as="div" @close="close" class="relative z-10">
        <TransitionChild
          as="template"
          enter="transition ease-in will-change-auto"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 overflow-y-auto bg-black-4 bg-opacity-50" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto bg-black-5/80">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="transition ease-in will-change-auto"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogPanel
                class="w-full max-w-md overflow-hidden bg-white text-left align-middle shadow-xl transition-all bg-transparent will-change-transform"
              >
                <div class="mt-[19px] h-[532px] max-w-[416px] flex flex-col justify-start items-center top-0 right-0 left-0 bottom-0 overflow-auto bg-gray-light-9 p-2 rounded-[1rem]">
                        <slot name="content"></slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
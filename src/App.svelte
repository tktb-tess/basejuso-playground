<script lang="ts">
  import type { Result } from './modules/types';
  import { fromBaseJuso, toBaseJuso } from '@tktb-tess/util-fns/basejuso';
  import { encode, decode } from './modules/convert';
  import { onMount } from 'svelte';

  let inputText = $state('');
  let encoded = $state('');
  let decoded2: Result<string> = $state({ success: true, value: '' });

  onMount(() => {
    Object.defineProperties(window, {
      toBaseJuso: {
        value: toBaseJuso,
        enumerable: true,
      },
      fromBaseJuso: {
        value: fromBaseJuso,
        enumerable: true,
      },
      encode: {
        value: encode,
        enumerable: true,
      },
      decode: {
        value: decode,
        enumerable: true,
      },
    });
  });
</script>

<main>
  <div class="textarea-cont">
    <div>
      <label for="text-input">Input</label>
      <p>{inputText.length * 16} bits</p>
      <textarea id="text-input" bind:value={inputText}></textarea>
    </div>
    <button
      onclick={async (ev) => {
        ev.preventDefault();
        encoded = await encode(inputText);
        try {
          const value = await decode(encoded);
          decoded2 = {
            success: true,
            value,
          };
        } catch (error) {
          decoded2 = {
            success: false,
            error,
          };
        }
      }}
    >
      変換!
    </button>
    <div>
      <label for="text-encoded">deflate-raw/Basejuso</label>
      <p>{encoded.length * 16} bits</p>
      <textarea id="text-encoded" readonly value={encoded}></textarea>
    </div>
    <div>
      <label for="text-decoded">Decoded</label>
      <textarea
        id="text-decoded"
        readonly
        value={decoded2.success ? decoded2.value : 'ERROR'}
      ></textarea>
    </div>
  </div>
</main>

<style>
  @layer component {
    main {
      display: flow-root;
      max-width: 80rem;
      margin-inline: auto;
      background-color: var(--color-main);
    }

    textarea {
      resize: none;
      font-family: monospace;
      height: 14rem;
      border: solid 1px #00000030;
      border-radius: 4px;
      width: 100%;
      padding: 0.25rem;
    }

    .textarea-cont {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding-inline: 0.4rem;
      min-height: 100lvh;
      place-content: center;

      > * {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        > * {
          display: block;
        }
      }

      label,
      p {
        text-align: center;
      }

      button {
        background-color: light-dark(#1d003d, #f5ecff);
        color: Canvas;
        border-radius: 4px;
        cursor: pointer;
        transition-property: opacity;
        transition-duration: 120ms;
        transition-timing-function: cubic-bezier(0.25, 0, 0, 1);
        align-self: center;
        padding: 0.25rem 1rem;

        @media (any-hover: hover) {
          &:hover {
            opacity: 0.75;
          }
        }
      }
    }
  }
</style>

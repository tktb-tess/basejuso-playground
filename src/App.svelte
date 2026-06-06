<script lang="ts">
  import { fromBaseJuso, toBaseJuso } from '@tktb-tess/util-fns/basejuso';
  import type { Result } from './modules/types';
  let inputText = $state('');
  // const delay = 500;
  // let timeoutID: ReturnType<typeof setTimeout> | null = null;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder(undefined, { fatal: true });
  const encoded = $derived(toBaseJuso(encoder.encode(inputText)));
  const decoded: Result<string> = $derived.by(() => {
    try {
      return {
        success: true,
        value: decoder.decode(fromBaseJuso(encoded)),
      };
    } catch (e) {
      return {
        success: false,
        error: e,
      };
    }
  });
</script>

<main>
  <div class="textarea-cont">
    <div>
      <label for="text-input">Input</label>
      <p>{inputText.length * 16} bits</p>
      <textarea id="text-input" bind:value={inputText}></textarea>
    </div>
    <div>
      <label for="text-encoded">Basejuso</label>
      <p>{encoded.length * 16} bits</p>
      <textarea id="text-encoded" readonly value={encoded}></textarea>
    </div>
    <div>
      <label for="text-decoded">Decoded</label>
      <textarea
        id="text-decoded"
        readonly
        class={decoded.success ? '' : 'error'}
        value={decoded.success ? decoded.value : 'ERROR'}
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
    }

    .error {
      color: #d40000;
    }
  }
</style>

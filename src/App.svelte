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
      <textarea id="text-input" bind:value={inputText}></textarea>
    </div>
    <div>
      <label for="text-encoded">Basejuso</label>
      <textarea id="text-encoded" readonly>{encoded}</textarea>
    </div>
    <div>
      <label for="text-decoded">Decoded</label>
      <textarea
        id="text-decoded"
        readonly
        class={decoded.success ? '' : 'error'}
      >
        {decoded.success ? decoded.value : 'ERROR'}
      </textarea>
    </div>
  </div>
</main>

<style>
  @layer component {
    main {
      display: flow-root;
      max-width: 80rem;
      margin-inline: auto;
    }

    textarea {
      resize: vertical;
      height: 16rem;
    }

    .textarea-cont {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));

      > * {

        > * {
          display: block;
        }
      }
    }

    .error {
      color: #d40000;
    }
  }
</style>

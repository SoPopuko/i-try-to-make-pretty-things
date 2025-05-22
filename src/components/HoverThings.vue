<template>
  <div>
    <!-- Buttons -->
    <div style="padding: 3em">
      <h2>Floating buttons</h2>
      <div class="hover-things-flex">
        <div id="button-small" class="hover-things-btn small">Lorem ipsum</div>
        <div id="button-medium" class="hover-things-btn medium">Lorem ipsum dolor</div>
        <div id="button-large" class="hover-things-btn large">Lorem ipsum dolor sit amet</div>
      </div>
    </div>

    <!-- Text -->
    <div style="padding: 3em">
      <h2>Text</h2>
      <div class="hover-things-flex">
        <div class="hover-things-text instant"><p>Lorem ipsum</p></div>
        <div class="hover-things-text slower"><p>Lorem ipsum</p></div>
        <div class="hover-things-text floating"><p>Lorem ipsum</p></div>
      </div>
    </div>

    <!-- Tooltips -->
    <div style="padding: 3em">
      <h2>Tooltips</h2>
      <div class="hover-things-flex">
        <div>
          <div class="tooltip">
            Tooltip instant
            <span class="tooltiptext">Tooltip text</span>
          </div>
        </div>
        <div class="separator"></div>
        <div>
          <div class="tooltip">
            Tooltip instant
            <span class="tooltiptext tooltip-slower">Tooltip text</span>
          </div>
        </div>
        <div class="separator"></div>
      </div>
    </div>
  </div>
</template>

<docs>
---
title: 基础使用
---

这是一个`tooltip`基础使用的例子
</docs>

<script setup lang='ts'>
</script>

<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <jin-tooltip class="box-item" placement="top-start" content="Top Left prompts info">
        <jin-button style="margin-left: 12px;">
          top-start
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" placement="top" content="Top Center prompts info">
        <jin-button style="margin-left: 12px;">
          top
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" placement="top-end" content="Top Right Center prompts info">
        <jin-button style="margin-left: 12px;">
          top-end
        </jin-button>
      </jin-tooltip>
    </div>

    <div class="row">
      <jin-tooltip class="box-item" placement="left-start" content="Left Top prompts info">
        <jin-button>
          left-start
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" placement="right-start" content="Right Top prompts info">
        <jin-button>
          right-start
        </jin-button>
      </jin-tooltip>
    </div>

    <div class="row">
      <jin-tooltip class="box-item" placement="left" content="Left Center prompts info">
        <jin-button style="margin-top: 12px; margin-bottom: 12px;">
          left
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" placement="right" content="Right Center prompts info">
        <jin-button>
          right
        </jin-button>
      </jin-tooltip>
    </div>

    <div class="row">
      <jin-tooltip class="box-item" placement="left-end" content="Left Bottom prompts info">
        <jin-button>
          left-end
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" placement="right-end" content="Right Bottom prompts info">
        <jin-button>
          right-end
        </jin-button>
      </jin-tooltip>
    </div>

    <div class="row center">
      <jin-tooltip class="box-item" content="Bottom Start prompts info">
        <jin-button style="margin-left: 12px;">
          bottom-start
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" content="Bottom Center prompts info">
        <jin-button style="margin-left: 12px;">
          bottom
        </jin-button>
      </jin-tooltip>

      <jin-tooltip class="box-item" content="Bottom End prompts info">
        <jin-button style="margin-left: 12px;">
          bottom-end
        </jin-button>
      </jin-tooltip>
    </div>
  </div>
</template>

<style  scoped>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
</style>

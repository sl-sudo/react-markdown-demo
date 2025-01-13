# 初识样式

在 Motiff 妙多中，你可以将需要重复使用的属性创建为样式，便于后续快速使用、统一调整。

Motiff 妙多中的样式包括：「颜色样式」、「文本样式」、「效果样式」和「布局网格样式」。每次修改样式，比如将一个文本样式的字号做一些调整，Motiff 妙多都会将这些修改同步至已使用这个样式的文本图层。

与组件一样，样式可以在本地使用，也可以作为组件库的一部分发布并在其他文件使用，便于在团队中建立和维护一致的样式。

## 颜色样式

颜色样式可以由（一个或多个）纯色、渐变、图片组成。可应用在图层的填充、描边属性。
!['1-颜色样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/fem7lk3jq.png)

## 文本样式

文本样式由文本属性中的字体、字重、字号、行高、字间距、段间距组成，可应用在文本图层的文本属性。
!['2-文本样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/e4rjmu5r2.png)

:::wk-block{.tip}

文本样式不包括文本的对齐方式、响应类型，因此无需为文本样式设置这两类属性，而是可以在每个已使用样式的文本图层中进行自定义。

:::

## 效果样式

效果样式可以由（一个或多个）外阴影、内阴影、图层模糊、背景模糊组成。可应用在图层的效果属性。

!['效果样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/4z4cf9vga.png)

## 布局网格样式

布局网格样式可以由（一个或多个）网格、栅格组成。可应用在容器的布局网格属性。
!['4-布局网格样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/bqfgy4yaj.png)

# 创建样式

你可以将图层上的属性创建为样式：

1. 选中需要创建样式的图层。
2. 在设计面板中，点击需要创建为样式的属性右侧 !['16_panel_style.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/zyk64q83z.svg) ，打开样式选择器。
3. 点击样式选择器右上角 !['16_common_add.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/jq867zoun.svg) 。
4. 在创建样式的弹窗中输入样式的名称，并点击确定。

![创建样式](https://motiff.fbcontent.cn/public/resource/cms/video/a545692f-079b-4379-a94c-5a2cafb04171.mp4)

# 使用样式

## 图层上使用样式

你可以在图层上使用本地样式或团队组件库里的样式。

1. 选中需要使用样式的图层。
2. 在设计面板中，点击需要使用样式的属性右侧 !['16_panel_style.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/zyk64q83z.svg) ，打开样式选择器。
3. 在样式选择器中，你可以看到本地样式和引用的团队组件库中的样式。
4. 选择需要使用的样式即可在图层上使用该样式。

![使用样式](https://motiff.fbcontent.cn/public/resource/cms/video/214ca1e6-30da-40dd-aa98-fdbf4fe4a98b.mp4)

:::wk-block{.tip}

颜色样式的样式选择器有两种展示视图：列表视图和网格视图。
!['展示视图.png'](https://motiff.fbcontent.cn/public/resource/cms/image/v6hrpt5f9.png)

:::

## 更换样式

你可以对已使用样式的图层更换样式。

1. 选中需要更换样式的图层。
2. 在设计面板中，点击已使用样式区域，打开样式选择器。
3. 在样式选择器中，选择需要使用的样式。

![更换样式](https://motiff.fbcontent.cn/public/resource/cms/video/56f95e09-6d5a-419f-b402-dd7ab122d553.mp4)

## 分离样式

当你将图层上的样式分离，相关的属性将被保留。这些属性将不再同步样式的修改，你可以根据需要自由更改这些属性。

1. 选中需要使用样式的图层。
2. 在设计面板中，点击需要更换的样式右侧的 !['16_panel_link.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/ckmu8gzk6.svg) 即可分离样式。

# 管理样式

## 查看样式

### 查看本地样式

本地样式是存在于当前文件中的样式。你可以在未选中任何图层时的设计面板、样式选择器中看到本地样式。
!['查看本地样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/pulmdw9fy.png)

### 查看团队组件库中的样式

要查看其他已发布文件的样式，你可以在样式选择器中查看，也可以在引用组件库的弹窗中查看各个库中的样式。
!['查查看团队组件库中的样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/0y35lq6er.png)

## 管理本地样式

你可以在设计面板修改、整理本文件中的样式。

### 分组

为了更轻松地查找和选择样式，你可以通过以下 3 种方式对样式进行分组：

- 选中需要分为一组的样式，点击右键唤起右键菜单，选择「添加到新分组」。
- 选中需要分为一组的样式，使用快捷键 <kbd>⌘ Command</kbd> + <kbd>G</kbd> / <kbd>Ctrl</kbd> + <kbd>G</kbd> 。
- 通过在样式的命名中使用 `/` 来创建分组或将样式添加到已有分组。

:::wk-block{.note}

命名规则：命名中每个 `/` 之前的内容为一级分组，最后一部分内容为样式的名称。例如：样式命名为 `-H1/EN/Semibold`，该样式将展示为 Semibold 并位于 H1、EN 两级分组下。
!['样式分组.png'](https://motiff.fbcontent.cn/public/resource/cms/image/lfb3h419a.png)

:::

:::wk-block{.tip}

可以使用修饰健 <kbd>⌘ Command</kbd> / <kbd>Ctrl</kbd> </kbd> 或 <kbd>Shift</kbd> 对设计面板的本地样式进行多选。

:::

### 排序

默认情况下，将按照添加样式的顺序显示样式。为了使它们更易于查找，你可以调整显示的顺序或所属的分组。

1. 选择一个或多个样式。
2. 拖动样式到目标位置，可以更改顺序或移动到分组中。

### 编辑

你可以从设计面板和样式选择器编辑本地样式。

- 设计面板：将鼠标悬停在样式上，然后点击右侧的 !['16_panel_adjust.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/fxw8149zy.svg) 。
- 样式选择器：右键点击样式，在菜单中选择「编辑样式」。

在「编辑样式」面板可以查看、编辑样式的具体属性，包括：

- 查看或编辑样式的名称。
- 查看或编辑样式的描述。
- 查看或编辑样式的属性。
    - 点击 !['16_common_add.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/oic0i5fud.svg) 、 !['16_common_delete.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/fr3pac2x5.svg) 添加或删除样式中的属性。
    - 点击 !['16_common_eyes.svg'](https://motiff.fbcontent.cn/public/resource/cms/image/d94sqmjy9.svg) 隐藏或显示样式中的属性。

!['编辑样式.png'](https://motiff.fbcontent.cn/public/resource/cms/image/7smplw2cr.png)

### 删除

如果你想删除一个或多个样式，你可以直接从设计面板和样式选择器中进行删除。

1. 在本地样式列表选择一种或多种样式。
2. 通过右键菜单、快捷键 <kbd>Delete</kbd> 将选中的样式删除。

删除样式后，你将无法再使用它。使用该样式的图层都将保留其属性，但与该样式分离。

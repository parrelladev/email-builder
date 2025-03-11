import { create } from 'zustand';

import getConfiguration from '../../getConfiguration';

import { TEditorConfiguration } from './core';

type TValue = {
  document: TEditorConfiguration;

  selectedBlockId: string | null;
  selectedSidebarTab: 'block-configuration' | 'styles';
  selectedMainTab: 'editor' | 'preview' | 'json' | 'html';
  selectedScreenSize: 'desktop' | 'mobile';

  inspectorDrawerOpen: boolean;
  samplesDrawerOpen: boolean;
};

const editorStateStore = create<TValue>(() => ({
  document: getConfiguration(window.location.hash),
  selectedBlockId: null,
  selectedSidebarTab: 'styles',
  selectedMainTab: 'editor',
  selectedScreenSize: 'desktop',

  inspectorDrawerOpen: true,
  samplesDrawerOpen: true,
}));

export function useDocument() {
  return editorStateStore((s) => s.document);
}

export function useSelectedBlockId() {
  return editorStateStore((s) => s.selectedBlockId);
}

export function useSelectedScreenSize() {
  return editorStateStore((s) => s.selectedScreenSize);
}

export function useSelectedMainTab() {
  return editorStateStore((s) => s.selectedMainTab);
}

export function setSelectedMainTab(selectedMainTab: TValue['selectedMainTab']) {
  return editorStateStore.setState({ selectedMainTab });
}

export function useSelectedSidebarTab() {
  return editorStateStore((s) => s.selectedSidebarTab);
}

export function useInspectorDrawerOpen() {
  return editorStateStore((s) => s.inspectorDrawerOpen);
}

export function useSamplesDrawerOpen() {
  return editorStateStore((s) => s.samplesDrawerOpen);
}

export function setSelectedBlockId(selectedBlockId: TValue['selectedBlockId']) {
  const selectedSidebarTab = selectedBlockId === null ? 'styles' : 'block-configuration';
  const options: Partial<TValue> = {};
  if (selectedBlockId !== null) {
    options.inspectorDrawerOpen = true;
  }
  return editorStateStore.setState({
    selectedBlockId,
    selectedSidebarTab,
    ...options,
  });
}

export function setSidebarTab(selectedSidebarTab: TValue['selectedSidebarTab']) {
  return editorStateStore.setState({ selectedSidebarTab });
}

export function resetDocument(document: TValue['document']) {
  return editorStateStore.setState({
    document,
    selectedSidebarTab: 'styles',
    selectedBlockId: null,
  });
}

export function setDocument(document: TValue['document']) {
  const originalDocument = editorStateStore.getState().document;
  return editorStateStore.setState({
    document: {
      ...originalDocument,
      ...document,
    },
  });
}

export function toggleInspectorDrawerOpen() {
  const inspectorDrawerOpen = !editorStateStore.getState().inspectorDrawerOpen;
  return editorStateStore.setState({ inspectorDrawerOpen });
}

export function toggleSamplesDrawerOpen() {
  const samplesDrawerOpen = !editorStateStore.getState().samplesDrawerOpen;
  return editorStateStore.setState({ samplesDrawerOpen });
}

export function setSelectedScreenSize(selectedScreenSize: TValue['selectedScreenSize']) {
  return editorStateStore.setState({ selectedScreenSize });
}

export function duplicateBlock(blockId: string) {
  const state = editorStateStore.getState();
  const document = state.document;
  const blockToCopy = document[blockId];

  if (!blockToCopy) return;

  // Gerar novo ID único para o bloco duplicado
  const newBlockId = `block-${Date.now()}`;

  // Criar cópia profunda do bloco
  const newBlock = JSON.parse(JSON.stringify(blockToCopy));

  // Atualizar o documento com o novo bloco
  const updatedDocument = {
    ...document,
    [newBlockId]: newBlock,
  };

  // Se o bloco está dentro de um container, adicionar à lista de childrenIds
  Object.entries(document).forEach(([id, block]) => {
    if (block.data?.childrenIds?.includes(blockId)) {
      const index = block.data.childrenIds.indexOf(blockId);
      const newChildrenIds = [...block.data.childrenIds];
      newChildrenIds.splice(index + 1, 0, newBlockId);
      
      updatedDocument[id] = {
        ...block,
        data: {
          ...block.data,
          childrenIds: newChildrenIds,
        },
      };
    }
  });

  // Atualizar o estado
  editorStateStore.setState({
    document: updatedDocument,
    selectedBlockId: newBlockId,
  });
}

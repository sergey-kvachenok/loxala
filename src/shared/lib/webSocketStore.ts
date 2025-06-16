class WebSocketStore {
  private message: string = '';
  private listeners: Array<() => void> = [];
  private socket: WebSocket | null = null;

  connect(url: string) {
    if (this.socket) return;
    this.socket = new WebSocket(url);
    this.socket.onmessage = (event) => {
      this.message = event.data;
      this.listeners.forEach((listener) => listener());
    };
    this.socket.onclose = () => {
      this.socket = null;
    };
  }

  send(msg: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(msg);
    }
  }

  getMessage() {
    return this.message;
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

export const webSocketStore = new WebSocketStore();
export const connectWebSocket = webSocketStore.connect.bind(webSocketStore);
export const sendMessage = webSocketStore.send.bind(webSocketStore);
export const getMessage = webSocketStore.getMessage.bind(webSocketStore);
export const subscribe = webSocketStore.subscribe.bind(webSocketStore);

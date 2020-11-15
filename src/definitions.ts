declare module '@capacitor/core' {
  interface PluginRegistry {
    FirebaseAIO: FirebaseAIOPlugin;
  }
}

export interface FirebaseAIOPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

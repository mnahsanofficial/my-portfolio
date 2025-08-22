declare module 'website-contact-form' {
  export interface ContactFormOptions {
    target: string | HTMLElement;
    theme?: 'light' | 'dark';
    labels?: {
      title?: string;
      name?: string;
      email?: string;
      message?: string;
    };
    placeholders?: {
      name?: string;
      email?: string;
      message?: string;
    };
    buttonText?: string;
    emailJS?: {
      serviceId: string;
      templateId: string;
      publicKey: string;
    };
    onSubmit?: (data: { name: string; email: string; messageText: string; messageHtml: string }) => void | Promise<void>;
    onSuccessMessage?: string;
    onErrorMessage?: string;
    accentGradient?: string;
  }

  export interface Destroyable {
    destroy(): void;
  }

  export function createContactForm(options: ContactFormOptions): Promise<Destroyable>;
}

declare module 'website-contact-form/dist/style.css' {
  const content: string;
  export default content;
}

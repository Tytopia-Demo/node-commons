export interface ServiceConfig {
  name: string;
  version: string;
  environment: string;
}

export interface RequestContext {
  traceId: string;
  spanId: string;
  userId?: string;
}

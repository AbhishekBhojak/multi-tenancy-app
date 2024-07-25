import { NextFunction, Request, Response } from 'express';

const tenant_header = 'x-tenant-id'

export function tenancyMiddleware(req: Request, _res: Response, next: NextFunction): void {
  // const header = req.headers[TENANT_HEADER] as string;
  const header = req.headers.tenant_id as string;
  console.log('header: ', header);

  req.tenantId = header?.toString() || null;
  next();
}

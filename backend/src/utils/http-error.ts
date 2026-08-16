/**
 * HTTP error carrying an API error code.
 *
 * Controllers map it to the API error shape required by AGENTS.md:
 * `{ "error": { "message": string, "code": string } }` with a proper HTTP status.
 */
export class HttpError extends Error {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

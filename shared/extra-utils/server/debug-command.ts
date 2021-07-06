import { Debug, SendDebugCommand } from '@shared/models'
import { HttpStatusCode } from '../../core-utils/miscs/http-error-codes'
import { AbstractCommand, OverrideCommandOptions } from '../shared'

export class DebugCommand extends AbstractCommand {

  getDebug (options: OverrideCommandOptions = {}) {
    const path = '/api/v1/server/debug'

    return this.getRequestBody<Debug>({
      ...options,

      path,
      defaultExpectedStatus: HttpStatusCode.OK_200
    })
  }

  sendCommand (options: OverrideCommandOptions & {
    body: SendDebugCommand
  }) {
    const { body } = options
    const path = '/api/v1/server/debug/run-command'

    return this.postBodyRequest({
      ...options,

      path,
      fields: body,
      defaultExpectedStatus: HttpStatusCode.NO_CONTENT_204
    })
  }
}

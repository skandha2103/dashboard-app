import { AppConfig, LogType } from "../models/config";
import { ClientLoggerService } from "./client-logger.service";
import { LoggerService } from "./logger.service";

export const loggerServiceFactory = (config: AppConfig) => {
    if (config.logType === LogType.Client) {
      return new ClientLoggerService();
    }
    return new LoggerService();
  };

  // create an instance of type logger service if log type is default else create an instance of client logger service
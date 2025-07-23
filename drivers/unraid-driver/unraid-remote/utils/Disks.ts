/**
 * The object returned when calling lsblk
 */
export interface LsblkResult {
    blockdevices: {
        /**
         * Device name, e.g. "sda"
         */
        name: string;

        type: "loop" | "disk"

        /**
         * Disk size, e.g. "12.7T" or "20G"
         */
        size: string;
    }[];
}

/**
 * The object returned when calling smartctl
 */
export interface SmartctlResult {
    json_format_version: unknown;
    
    smartctl: {

        /**
         * Error/warning messages.
         * Not defined if exit_status is 0
         */
        messages?: {
            string: string;
            severity: "error" | "information";
        }[];

        /**
         * Exit code. Examples:
         * 0: Success
         * 1: Unknown USB bridge
         * 2: Device is in STANDBY mode
         */
        exit_status: number;
    };
    
    local_time: unknown;
    
    /**
     * Device info. Not included if device enumeration fails.
     * E.g. if unknown device type (USB thumb drive)
     */
    device?: {
        /**
         * Device name, e.g. "/dev/sdc"
         */
        name: string;

        /**
         * E.g. "/dev/sdc [SAT]"
         */
        info_name: string;

        type: "sat" | "scsi" | "nvme";

        protocol: "ATA" | "SCSI" | "NVMe";
    }
}

export interface DisksInfo {
    /**
     * The total number of disks detected in the system
     */
    disks: number;

    /**
     * The number of disks that are active (spinning)
     */
    disksSpinning: number;
}
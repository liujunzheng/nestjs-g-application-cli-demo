import { Controller, Get, UseGuards } from '@nestjs/common';
import { TestGuard } from 'src/guard/test.guard';
import { Roles } from 'src/decorator/roles.decorator';

// @UseGuards(TestGuard)
@UseGuards(TestGuard)
@Roles('admin')
@Controller('custom-guard')
export class CustomGuardController {
    @Get()
    index(): string {
        return 'hello , guard index';
    }
}

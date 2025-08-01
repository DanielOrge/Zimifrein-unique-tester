import {

  ApiBadRequestResponse,

  ApiBearerAuth,

  ApiOperation,

  ApiTags,

} from '@nestjs/swagger';

import {

  Crud,

  CrudAuth,

  CrudController,

  CrudRequest,

  ParsedRequest,

} from '@nestjsx/crud';

import {

  AccessControlAction,

  AccessControlGrant,

  AccessControlGuard,

  UseAccessControl,

} from '@rockts-org/nestjs-access-control';

import { AppResource } from '../../app.acl';

import {

  Body,

  Controller,

  Post,

  UseGuards,

  ValidationPipe,

} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

import { JobSignoffAccessControlFilterService } from './job-signoff-access-control-filter.service';

import { JobSignoffDto } from '@vatos-pas/common';

import { User } from '../user/user.entity';

import { JobSignoffService } from './job-signoff.service';

import { ok } from 'assert';



@ApiTags(AppResource.JobSignoff)

@ApiBadRequestResponse()

@ApiBearerAuth()

@Crud({

  model: {

    type: JobSignoffDto,

  },

  dto: {

    create: JobSignoffDto,

  },

  validation: {

    transform: true,

  },

  query: {

    join: {

      boardPurchase: {

        eager: true,

        select: false,

      },

      'boardPurchase.job': {

        eager: true,

        select: false,

        alias: 'job',

      },

      'boardPurchase.job.model': {

        eager: true,

        select: false,

        alias: 'model',

      },

      'boardPurchase.job.model.subdivision': {

        eager: true,

        select: false,

        alias: 'subdivision',

      },

               'boardPurchase.job.model.subdivision.subdivisionSupervisors': {

        eager: true,

        select: false,

        alias: 'subdivisionSupervisors',

      },

      'boardPurchase.job.model.subdivision.region': {

        eager: true,

        select: false,

        alias: 'region',

      },

      'boardPurchase.job.model.subdivision.region.userRegions': {

        eager: true,

        select: false,

        alias: 'userRegions',

      },

    },

    sort: [

      {

        field: 'floor',

        order: 'ASC',

      },

    ],

  },

  routes: {

    only: ['getOneBase'],

    createManyBase: {

      decorators: [

        ApiOperation({

          description: 'Create many board receipt floors',

          operationId: 'boardReceiptFloor_createMany',

        }),

        AccessControlGrant({

          resource: AppResource.JobSignoff,

          action: AccessControlAction.CREATE,

        }),

      ],

    },

  },

})

@Controller(AppResource.JobSignoff)

@UseGuards(AuthGuard(), AccessControlGuard)

@CrudAuth({

  property: 'user',

  filter: (user: User) => {

    if (

      User.isAdminLike(user) ||

      User.isMaterialDispatcher(user) ||

      User.isLaborCoordinator(user) 

    ) {

      return;

    } else if (User.isSupervisor(user)) {

      return {

         'subdivision.subdivisionSupervisors.userId': user.id,

      };

    } else {

      return {

        'userRegions.userId': user.id,

      };

    }

  },

})

@UseAccessControl({ service: JobSignoffAccessControlFilterService })

export class JobSignoffController implements CrudController<JobSignoffDto> {

  constructor(public service: JobSignoffService) {}



  get base(): CrudController<JobSignoffDto> {

    return this;

  }



@Post('/signoff')

async signoff(

  @ParsedRequest() req: CrudRequest,

  @Body(new ValidationPipe()) jobSignoffDto: JobSignoffDto,

) {

  // Unused variable

  const unused = ;



  // Bad practice: using 'var' instead of 'let' or 'const'

  var msg = 'signing...';



  // Debugging statement (should be removed in production)

  console.log('signing job', jobSignoffDto);    



  // Active debugger. 

  debugger;



  // Unnecessary nested function

  function temp() {

    console.log('nested');

  }



  // Missing semicolon

  const test = 'no semicolon'



  // High complexity due to deep nesting

  if (true) {

    if (msg) {

      if (jobSignoffDto) {

        await this.service.processSignoff(jobSignoffDto);

      }

    }

  }



  return ok(jobSignoffDto);

}

}


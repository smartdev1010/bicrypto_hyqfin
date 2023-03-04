<div class="card">
    <form action="<?php echo e(route('user.profile.update')); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <div class="card-body space-y-5">
            <h4 name="card-title">
                <?php echo e(__('Profile Information')); ?>

            </h4>

            <div name="description">
                <?php echo e(__('Update your account\'s profile information and email address.')); ?>

            </div>

            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div class="mr-1">
                        <img class="img-thumbnail mb-1"
                            src="<?php echo e(getImage(imagePath()['profileImage']['path'] . '/' . $user->profile_photo_path, imagePath()['profileImage']['size'])); ?>" />
                    </div>
                    <div>
                        <input class="upload" name="image" type="file" id="image"
                            accept=".jpg,.jpeg,.png,.svg" />
                    </div>
                </div>
            </div>

            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <!-- Firstname -->
                    <label class="form-label" for="firstname"><?php echo e(__('First Name')); ?></label>
                    <input id="firstname" type="text" class="form-control" name="firstname" autocomplete="firstname"
                        required value="<?php echo e($user->firstname); ?>" <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>
                </div>
                <div>
                    <!-- Lastname -->
                    <label class="form-label" for="lastname"><?php echo e(__('Last Name')); ?></label>
                    <input id="lastname" type="text" class="form-control" name="lastname" autocomplete="lastname"
                        required value="<?php echo e($user->lastname); ?>" <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>
                </div>
                <div>
                    <!-- Email -->
                    <label class="form-label" for="email"><?php echo e(__('Email')); ?></label>
                    <input id="email" type="email" class="form-control" name="email" required
                        value="<?php echo e($user->email); ?>">
                </div>
                <div>
                    <!-- Address -->
                    <label class="form-label" for="address"><?php echo e(__('Address')); ?></label>
                    <input id="address" type="text" class="form-control" name="address" autocomplete="address"
                        required value="<?php echo e($user->address); ?>" <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>
                </div>
                <div>
                    <!-- City -->
                    <label class="form-label" for="city"><?php echo e(__('City')); ?></label>
                    <input id="city" type="text" class="form-control" name="city" autocomplete="city"
                        required value="<?php echo e($user->city); ?>" <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>
                </div>
                <div>
                    <!-- State -->
                    <label class="form-label" for="state"><?php echo e(__('State')); ?></label>
                    <input id="state" type="text" class="form-control" name="state" autocomplete="state"
                        required value="<?php echo e($user->state); ?>" <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>
                </div>
                <div>
                    <!-- Zip -->
                    <label class="form-label" for="zip"><?php echo e(__('Zip')); ?></label>
                    <input id="zip" type="text" class="form-control" name="zip" autocomplete="zip" required
                        value="<?php echo e($user->zip); ?>" <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>

                </div>
                <div>
                    <!-- Country -->
                    <label class="form-label" for="country"><?php echo e(__('Country')); ?></label>
                    <select class="form-select" name="country" id="country" data-dd-class="search-on" required
                        <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?> disabled <?php endif; ?>>
                        <option value=""><?php echo e(__('Select Country')); ?></option>
                        <?php $__currentLoopData = getCountries(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $country): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option <?php echo e((isset($user->country) ? $user->country : '') == $country ? 'selected' : ''); ?>

                                value="<?php echo e($country); ?>" name="country"><?php echo e($country); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
                <?php if(checkKYC($user->id) == 1 && getPlatform('kyc')->kyc_status == 1): ?>
                    <!-- Country -->
                    <label class="form-label" for="country"><?php echo e(__('Resubmit KYC')); ?></label>
                    <a href="/user/kyc/application?state=new"
                        class="w-full btn btn-success"><?php echo e(__('Resubmit KYC')); ?></a>
                <?php endif; ?>
            </div>
        </div>

        <?php if(auth()->user()->role_id != 3): ?>
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit">
                    <?php echo e(__('Update')); ?>

                </button>
            </div>
        <?php endif; ?>
    </form>

</div>
<?php /**PATH D:\dev\vscode\resources\views/profile/profile.blade.php ENDPATH**/ ?>
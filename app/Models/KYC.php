<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CacheKeyTrait;

use Illuminate\Support\Facades\Cache;

class KYC extends Model
{
    use HasFactory;
    use CacheKeyTrait;


    public function getCache()
    {
        return Cache::remember($this->cacheKey($this) . ':kycs', now()->addHours(4), function () {
            return self::get();
        });
    }

    public function clearCache()
    {
        Cache::forget($this->cacheKey($this) . ':kycs');
        return self::getCache();
    }
    protected $table = 'kycs';
    const KYC_STATUS = ['pending', 'approved', 'missing', 'rejected'];

    protected $fillable = [
        'userId', 'firstName', 'email',
    ];

    public function __construct()
    {
        //
    }

    public static function documents($name = null)
    {
        $names = [
            'passport' => __('Passport'),
            'nidcard' => __('National ID Card'),
            'driving' => __('Driver’s License'),
        ];
        if ($name) {
            return isset($names[$name]) ? $names[$name] : null;
        }
        return $names;
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userId', 'id');
    }

    public function checker_info()
    {
        return $this->belongsTo(User::class, 'reviewedBy', 'id');
    }

    public static function rules()
    {
        $check_doc = true;

        return [
            'first_name' => (self::kyc_fields('kyc_firstname', 'show') && self::kyc_fields('kyc_firstname', 'req')) ? 'required|string|min:2' : 'nullable',
            'last_name' => (self::kyc_fields('kyc_lastname', 'show') && self::kyc_fields('kyc_lastname', 'req')) ? 'required|string|min:2' : 'nullable',
            'phone' => (self::kyc_fields('kyc_phone', 'show') && self::kyc_fields('kyc_phone', 'req')) ? 'required|string|min:5' : 'nullable',
            'dob' => (self::kyc_fields('kyc_dob', 'show') && self::kyc_fields('kyc_dob', 'req')) ? 'required|date|date_format:"m/d/Y"' : 'nullable',
            'gender' => (self::kyc_fields('kyc_gender', 'show') && self::kyc_fields('kyc_gender', 'req')) ? 'required|string|min:2' : 'nullable',
            'telegram' => (self::kyc_fields('kyc_telegram', 'show') && self::kyc_fields('kyc_telegram', 'req')) ? 'required|string|min:2' : 'nullable',

            'email' => auth()->guest() ? ((self::kyc_fields('kyc_email', 'show') && self::kyc_fields('kyc_email', 'req')) ? 'required|string|email|max:255|unique:users' : 'nullable') : 'nullable',
            'password' => auth()->guest() ? 'required|string|min:6' : 'nullable',

            'country' => (self::kyc_fields('kyc_country', 'show') && self::kyc_fields('kyc_country', 'req')) ? 'required|string|min:4' : 'nullable',
            'state' => (self::kyc_fields('kyc_state', 'show') && self::kyc_fields('kyc_state', 'req')) ? 'required|string|min:2' : 'nullable',
            'city' => (self::kyc_fields('kyc_city', 'show') && self::kyc_fields('kyc_city', 'req')) ? 'required|string|min:2' : 'nullable',
            'zip' => (self::kyc_fields('kyc_zip', 'show') && self::kyc_fields('kyc_zip', 'req')) ? 'required|min:3' : '',
            'address_1' => (self::kyc_fields('kyc_address1', 'show') && self::kyc_fields('kyc_address1', 'req')) ? 'required|string|min:4' : 'nullable',
            'address_2' => (self::kyc_fields('kyc_address2', 'show') && self::kyc_fields('kyc_address2', 'req')) ? 'required|string|min:4' : 'nullable',

            'documentType' => $check_doc ? 'required' : 'nullable',
            'document' => $check_doc ? 'required' : 'nullable',
            'document2' => request()->input('documentType') == 'nidcard' ? 'required' : 'nullable',
            'document3' => $check_doc ? 'required' : 'nullable',
        ];
    }

    public static function kyc_fields($name = '')
    {
        $fields = [
            'kyc_opt_hide' => 0,
            'kyc_public' => 1,
            'kyc_before_email' => 0,
            'kyc_firstname' => array('show' => 1, 'req' => 1),
            'kyc_lastname' => array('show' => 1, 'req' => 1),
            'kyc_email' => array('show' => 1, 'req' => 1),
            'kyc_phone' => array('show' => 1, 'req' => 0),
            'kyc_dob' => array('show' => 1, 'req' => 0),
            'kyc_gender' => array('show' => 1, 'req' => 1),
            'kyc_country' => array('show' => 1, 'req' => 1),
            'kyc_state' => array('show' => 1, 'req' => 1),
            'kyc_city' => array('show' => 1, 'req' => 1),
            'kyc_zip' => array('show' => 1, 'req' => 1),
            'kyc_address1' => array('show' => 1, 'req' => 1),
            'kyc_address2' => array('show' => 1, 'req' => 0),
            'kyc_telegram' => array('show' => 1, 'req' => 0),
            'kyc_document_passport' => 1,
            'kyc_document_nidcard' => 1,
            'kyc_document_driving' => 1,
        ];
        if ($name == '') {
            return $fields;
        } else {
            return in_array($name, $fields);
        }
    }
}
